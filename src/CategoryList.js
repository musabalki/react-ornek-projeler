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
    }
    render() { 
        return (  <div>
            <h3>{this.props.info.title} {this.state.counter} </h3>
            <ListGroup>
                {
                    this.state.categories.map(category=><ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>)
                }
          </ListGroup>
        </div> );
    }
}
 
export default CategoryList;