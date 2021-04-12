import React, { Component } from 'react';
import PDF from './PDF';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.arr,
        }
    }
    state = {
        postSubmitted: false
    }

    

    onChange(e, index, img) {
        let image = this.state.image
        image[index].mode = !Boolean(image[index].mode)
        this.setState({
            image: image
        })
    }

    sunmitPost = (e) => {
        
        debugger;
        if(!this.state.image){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
        
    }

    render(){
        return (
            <>
            {  !this.state.postSubmitted ? 
                (
                    <div className="email-funtion-box" >
                        <div className="email-funtion-title"><p>Select your Badges</p></div>
                        <div className="modal-form-badges-selector">

                        {
                            this.state.image.map((item, index) => {
                                return (
                                    
                                    <div className="badges-select-block">
                                        
                                        <img src={this.state.image[index].img} />
                                        <div className="form-group">
                                        <input type="checkbox" value={item.mode} onChange={(e) => this.onChange(e, index, item.img)} checked={item.mode} />
                                        </div>
                                        
                                    </div>
                                    
                                )
                            })
                        }
                            <div className="form-group">
                                <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>             
                    </div >) : (
                        <PDF image={this.state.image} />
                )
            }
            </>            
        )
    }
}

export default Post;

/**
 * <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Add new Post</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Post Title" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('image')} name="image" type="text" placeholder="https://" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Enter your text here" rows="7"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
                    )
                }
            </>
 */