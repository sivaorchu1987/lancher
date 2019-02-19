import React, { Component } from "react";

import Pagination from "./Pagination";

class PaginationExample extends Component {


        state = {
            currentPage: 1,
            totalPages: 100,

        }



	handlePageChange = (page) => {
		this.setState({ currentPage: page });

	}
	componentDidMount(){
	   this.setState({totalPages:this.props.numberofPages})
    }



	render() {
        const columns = [
            {
                columnStyle: { width: '50px' },
                name: 'ID',
                key: 'id',
                props: { className: 'test' },
            }, {
                name: 'Name',
                key: 'name',
                props: { className: 'custom-head-class' },
            }, {
                name: 'Create at',
                key: 'createdAt',
            },
        ];
        const {invoice} = this.props;
		const { currentPage, totalPages } = this.state;
		//const numberofPages = invoice.length/2;
        const numberofPages = totalPages;

		console.log(((currentPage -1)  % invoice.length )+ (currentPage - 1),( currentPage % invoice.length)+ currentPage );
       // (invoice.length / numberofPages)* (currentPage -1),(invoice.length / numberofPages)* (currentPage)


        const postList = ( invoice.slice( (invoice.length / numberofPages)* (currentPage -1),(invoice.length / numberofPages)* (currentPage) ).map((post,index) =>{
        		console.log("index",index)

                    return ( <tr key={post.id}>
                        <td>{post.addr_book_nr}</td>
                        <td>{post.ord_nr}</td>
                        <td>{post.bol_nr}</td>
                    </tr>)


            })

        );
		//console.log(this.props.totalPages)
		return (
			<div className="container">
				<h1 className="title is-1">Invoice Summary</h1>

				<Pagination currentPage={currentPage} totalPages={Math.ceil(numberofPages)} onPageChange={this.handlePageChange} />
                <div>
                    <table className="table is-responsive">
                        <thead>
                        <tr>
                            <th>Header A</th>
                            <th><button onClick={this.sortBy('ord_nr')}></button>
                                Header B
                            </th>
                            <th>Header C</th>

                        </tr>
                        </thead>
                        <tbody>
                        {postList}
                        </tbody>
                    </table>

                    {/*<Table
                        data={postList}
                        columns={columns}
                        isStriped
                        styles={{
                            icon: { top: '3px' },
                            table: { borderTop: '2px solid #ccc' },
                        }}
                        defaultSort={{ key: 'name', type: 'desc' }}
                    />
                    );*/}

                </div>
			</div>
		);
	}
}

export default PaginationExample;