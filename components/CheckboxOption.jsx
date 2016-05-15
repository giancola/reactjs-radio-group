function CheckboxOption(props) {
	return (
		<p className="checkbox">
			<label>
				<input type="checkbox"
					onClick={props.onCheck}
					checked={props.checked}
					name={props.name}
					value={props.value}/>
				{props.children}
			</label>
		</p>
	);
}

CheckboxOption.propTypes = {
	value: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired,
	children: React.PropTypes.node
};
