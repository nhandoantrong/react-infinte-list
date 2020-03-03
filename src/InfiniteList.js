import React, { Component } from 'react'
import { pathOr, equals } from 'ramda';
import Styles from './InfiniteList.module.css';
import PropsConfig from './InfiniteList.proptypes'



const RenderedItemComponent = ({top, item, addItemRef, ItemComponent}) =>  <div 
        style = {{
            position: 'absolute',
            top,
            width: '100%',
        }}
        ref = {addItemRef} >
            <div style={{paddingBottom: '8px'}}>

                <ItemComponent  {...item} />
            </div>
    </div>

class InfiniteList extends Component {

    constructor(props){
        super(props);
        this.state = {
            beginList: 0,
            endList: 0,
            itemPosition : [0],
            currentMax: 0,
            itemHeight: [],
        }
        this.itemRef = [];
        this.itemListRef = null;
    }

    handleScollToBottom() {
        const { endList, currentMax } = this.state;
        this.setState({
            endList: endList + 1, 
            currentMax: currentMax + 1,
        }, this.addItemHeight)
    }

    handleScroll = (event) => {
        const {itemList} = this.props;
        const {currentMax} = this.state;
        const bottom = event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight * 2 + 10;
        if (bottom && currentMax <  itemList.length){
            this.handleScollToBottom();
            return;
        }
        this.setListIntervalToRender(event.target.scrollTop - Math.floor(event.target.clientHeight / 2), event.target.clientHeight * 2 );
    }

    setListIntervalToRender = (scrollTop, clientHeight) =>{
        const {itemPosition, endList: stateEndlist} = this.state;

        let beginList = itemPosition.findIndex((position) => position >= scrollTop);
        if (beginList >0) beginList -= 1;

        let endList = itemPosition.findIndex((position) => position >= clientHeight + scrollTop);
        if (endList === -1) endList = stateEndlist;


        this.setState({beginList, endList})
    }

    addItemRef = (itemComp) =>{
        if (itemComp){
            this.itemRef.push(itemComp)
        }
    }

    renderList = () =>{
        const {itemList, ItemComponent} = this.props;
        const {beginList, endList, itemPosition} = this.state;
        this.itemRef = [];
        const renderedItemList = itemList
            .slice(beginList, endList)
            .map((item, index) => <RenderedItemComponent 
            key = {item.key} 
            addItemRef={this.addItemRef} 
            top = {itemPosition[index + beginList]}
            ItemComponent = {ItemComponent }
            item = {item}/>)
        return renderedItemList;
    }



    calculateItemPosition = () => {
        const newItemPosition = this.state.itemHeight.reduce((heightArr, currentHeight) => {
            const position = currentHeight + heightArr[heightArr.length - 1];
            return [...heightArr, position]
        }, [0])

        this.setState({itemPosition: newItemPosition});
    }

    addItemHeight = () => {
        const addedRef = this.itemRef[this.itemRef.length - 1];
        if (addedRef){
            const itemHeight = [...this.state.itemHeight, addedRef.scrollHeight]
            this.setState({itemHeight}, this.calculateItemPosition)
        }
    }

    loadMoreOnInitialization = () =>{
        const { itemList } = this.props;
        const {endList, currentMax} = this.state;
        if (this.container){
            const bottom = this.container.scrollHeight <= this.container.clientHeight * 2 + 10;
            if (bottom && currentMax < itemList.length){
                this.setState({
                    endList : endList +1, 
                    currentMax: currentMax +1,
                }, this.addItemHeight)
            }
        }
    }

    changeSizeComponent = () =>{
        const {itemHeight, beginList, endList} =this.state;
        const itemListChildren = pathOr([], ['childNodes'])(this.itemListRef);
        const itemListChildrenHeight = [...itemListChildren].map((child)=> child.scrollHeight);
        const newItemHeight = [...itemHeight];
        const toCompareItemHeight = newItemHeight.slice(beginList, endList);
        if (equals (toCompareItemHeight, itemListChildrenHeight)){
            return;
        }
        newItemHeight.splice(beginList, endList - beginList, ...itemListChildrenHeight);
        this.setState({itemHeight: newItemHeight}, this.calculateItemPosition)

    }

    componentDidMount(){
        this.loadMoreOnInitialization();
    }

    componentDidUpdate(){
        this.loadMoreOnInitialization();
        this.changeSizeComponent()
    }

    componentWillUnmount(){
        this.container = null
    }

    render() {  
        const {itemPosition} = this.state;
        return (
            <div 
                ref={(container) =>{this.container = container}} 
                onScroll = {this.handleScroll} 
                className={`${Styles.InfiniteListContainer} ${this.props.className}`}>
                <div style ={{
                    height: itemPosition[itemPosition.length -1],
                    position: 'relative',
                }}
                    ref = {(itemListRef) => {this.itemListRef = itemListRef}}
                >
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

InfiniteList.propTypes = PropsConfig.propTypes;
InfiniteList.defaultProps = PropsConfig.defaultProps;

export default InfiniteList;

