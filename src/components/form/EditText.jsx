import React from "react";
import styled from "styled-components";

const EditableInput = styled.input`
  box-sizing: border-box;
  color: white;
  background: #313131;
  border: 0.5px solid rgb(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 30px;
  padding: 10px;
  font-size: 12px;
  text-overflow: ellipsis;
  width: 50%;
  z-index:1;

  :hover {
    border: 1px solid rgb(0,0,0);
    background: black;
  }

  :focus {
    border-color: #2a2a2a;
    background: black;
  }
`;

export default class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: "Untitled",
            disabled: false
        };

        this.updateEditingState = this.updateEditingState.bind(this);
    }

    componentWillMount() {
        this.setState({
            currentText: this.props.defaultValue
        });
    }

    updateEditingState(e) {
        console.log(e.target)
        const textInput = this.refs.textInput;
        // console.log(textInput.value);
        if (this.state.currentText !== textInput.value) {
            this.setState({
                currentText: textInput.value,
                disabled: true
            });

            setTimeout(() => {
                this.setState({
                    disabled: false
                });
                textInput.value = this.state.currentText;
            }, 2000);
        }
    }

    render() {
        const { currentText } = this.state;
        return (
            <EditableInput
                key={this.props.i}
                type="text"
                defaultValue={currentText}
                ref="textInput"
                onBlur={this.updateEditingState}
                disabled={this.state.disabled}
            />
        );
    }
}
