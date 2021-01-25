# react-project-issues-note
react项目开发中遇到的问题记录
##### 一 修改CheckboxGroup选项的选中问题
 Checkbox组件不要使用checked属性或者defaultValue属性,仅使用CheckboxGroup的value属性，value属性的每项都是string类型；通过更改value的值控制CheckboxGroup的选中项；对应组件components/modal.js;