import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
class CategoryList extends React.Component {
    /*constructor(props){
        super(props);
        this.state={counter:1}
    }*/
    state={
        counter:1,
        categories:[
            {categoryId:1,categoryName:"Category1"},
            {categoryId:2,categoryName:"Category2"},
        ]
        //currentCategory:''
    }
    
    render() { 
        return (  <div>
            <h3>{this.props.info.title} {this.state.counter} </h3>
            <ListGroup>
                {
                    this.state.categories.map(category=>
                    <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>)
                }
          </ListGroup>
          <h4>{this.props.currentCategory}</h4>
        </div> );
    }
}
 
export default CategoryList;