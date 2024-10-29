import React,{Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props)
    {
        super(props)
        this.state={hasError:false}
    }
    static getDerivedStateFromError(err)
    {
        return {hasError:true}
    } 
    componentDidCatch(error,info)
    {
        console.log(error)
        console.log(info)
    }
    render()
    {
        
            if(this.state.hasError==true)
            {
                return(
                    <div>
                <h1>some thing went wrong</h1>
            </div>)
            }
            return <h1>{this.props.children}</h1>
    }
}
export default ErrorBoundry