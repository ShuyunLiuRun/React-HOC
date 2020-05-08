import React from 'react'
import ShowHideMessage from './ShowHideMessage'
import Expandable from './Expandable'

const HiddenMessage = Expandable(ShowHideMessage)

class HiddenMessages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jerico Jericho Go"
            ],
            showing: -1
        }
    }

    render(){
        const { messages, showing } = this.state
        return(
            <div className="hidden-messages">
                <p>Click To Show The Sentence</p>
                {messages.map((message,i) => 
                    <HiddenMessage key={i}
                                    hidden={(i!==showing)}>
                        {message}
                    </HiddenMessage>
                )}
            </div>
        )
    }

}

export default HiddenMessages