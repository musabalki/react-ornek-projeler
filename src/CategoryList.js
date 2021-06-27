import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
class CategoryList extends React.Component {
    /*constructor(props){
        super(props);
        this.state={counter:1}
    }*/
    state={
        counter:1,
        categories:[]
        //currentCategory:''
    }
    getCategories= ()=>{
        fetch("http://localhost:3000/categories").then(response=>response.json())
        .then(data=>this.setState({categories:data}))
      }
      componentDidMount(){
        this.getCategories();
      }
    render() { 
        return (  <div>
            <h3>{this.props.info.title} {this.state.counter} </h3>
            <ListGroup>
                {
                    this.state.categories.map(category=>
                    <ListGroupItem active={category.categoryName===this.props.currentCategory ? true:false} onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>)
                }
          </ListGroup>
          {/* <h4>{this.props.currentCategory}</h4> */}
        </div> );
    }
}
 
export default CategoryList;