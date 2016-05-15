function CheckboxOption(props) {
	return React.createElement(
		"p",
		{ className: "checkbox" },
		React.createElement(
			"label",
			null,
			React.createElement("input", { type: "checkbox",
				onClick: props.onCheck,
				checked: props.checked,
				name: props.name,
				value: props.value }),
			props.children
		)
	);
}

CheckboxOption.propTypes = {
	value: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired,
	children: React.PropTypes.node
};