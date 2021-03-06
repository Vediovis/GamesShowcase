import React, {Component} from "react"
import "./TabList.css"

export default class TabList extends Component {

	onSelect(key) {
		this.props.onSelect(key)
	}

	render() {
		let {tabList, selectedKey, marginTop} = this.props
		let style = {}
		if (marginTop) {
			style.marginTop = marginTop
		}
		return <div className="TabList" style={style}>
			<div className="TabList__list">
				{tabList.map((tab, key) => {
					let tabClassList = ['TabList__item']
					if (key === selectedKey) {
						tabClassList.push('TabList__item--selected')
					}
					return <div className={tabClassList.join(' ')} key={key} onClick={() => this.onSelect(key)}>
						{tab}
					</div>
				})}
			</div>
		</div>
	}
}
