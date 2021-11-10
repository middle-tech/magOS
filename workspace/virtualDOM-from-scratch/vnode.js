// @CR @AR 10/2021
//
// This file define Virtual Node structure 
// see <https://dom.spec.whatwg.org/#node>
  
class VNode {
    static ELEMENT_NODE = 1;   // Node types
    static ATTRIBUTE_NODE = 2;
    static TEXT_NODE = 3;
  
    constructor (tag, props, nodeType,  data=null) {
        this.tag = tag
        this.props = props
        this.nodeType = nodeType
        this.data = data
        this.childNodes = new Array() // array of vnodes
        this.parent = null

        this._el = null   // reel DOM element 
    }

    appendChild = (vnode) => {
        this.childNodes.push(vnode) 
        vnode.parent = this
        return this
    }
    removeChild = (vnode) => {
        let idx = this.indexOfChild(vnode)
        this.childNodes.splice(idx,1)
        vnode.parent = null
        return this
    }
    replaceChild = (old, vnode) => {
        let idx = this.indexOfChild(old)
        this.childNodes[idx] = vnode
        old.parent = null
        return this
    }
    isEqual = (vnode) => {
        return (this.tag == vnode.tag && this.nodeType == vnode.nodeType &&
                this.data == vnode.data) //must be completed!
    }
    clone = () => {
        let cloned = Object.assign({}, this) 
        cloned.childNodes = new Array()
        this.childNodes.forEach((child, idx) => 
                                    cloned.childNodes[idx] = child.clone())
        return cloned
    }
    indexOfChild = (child) => {
        let index = -1;
        this.childNodes.forEach((e, idx) => {if (e.props.id == child.props.id)  index = idx}) 
        return index
    }

}

// Create Text or Element virtual node
//   return:  the virtual node
const createTextVNode = (tag, props, data) => new VNode(tag, props, TEXT_NODE, data)

const createVNode = (tag, props) => new VNode(tag, props, ELEMENT_NODE)

export {VNode, createTextVNode, createVNode}