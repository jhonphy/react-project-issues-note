import React, { Component } from 'react';
import { Button, Modal, Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleTypeModal: false,
            typeArr: [
                {label: '一', value: '1'},
                {label: '一', value: '2'},
                {label: '一', value: '3'},
                {label: '一', value: '4'}
            ],
            typeChecked: [],
            preCheckedType: [],
        }
    }
    componentDidMount() {

    }
    openModal() {
        this.setState({
            visibleTypeModal: true
        })
    }
    onTypeChange(values) {
        this.setState({
            typeChecked: values
        })
    }
    handleOk() {
        const {typeChecked} = this.state;
        this.setState({
            preCheckedType: typeChecked,
            visibleTypeModal: false
        });
    }
    handleCancel() {
        const {preCheckedType} = this.state;
        this.setState({
            typeChecked: preCheckedType,
            visibleTypeModal: false
        });
    }
    render() {
        const { typeArr, typeChecked } = this.state;
        return (
            <div>
                <Button onClick={_=>{this.openModal()}}>打开</Button>
                <Modal
                    title="类型选择"
                    visible={this.state.visibleTypeModal}
                    onOk={()=>{this.handleOk()}}
                    onCancel={()=>{this.handleCancel()}}
                >
                    <CheckboxGroup value={typeChecked} onChange={(values)=>{this.onTypeChange(values)}}>
                        {typeArr.map(item=><Checkbox value={item.value} key={item.value}>{item.label}</Checkbox>)}
                    </CheckboxGroup>
                </Modal>
            </div>
        )
    }
}