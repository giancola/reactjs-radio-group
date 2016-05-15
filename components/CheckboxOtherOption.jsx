function CheckboxOtherOption(props) {
	return (
		<p className="form-group checkbox">
			<label>
				<input
					onClick={props.onCheck}
					checked={props.checked}
					type="checkbox"
					name={props.name} value="other"/>
				Other
			</label>

			{props.checked && (
				<label className="form-inline">
					Please specify:
					<input type="text" name="referrer_other"/>
				</label>
			)}
		</p>
	);
}

CheckboxOtherOption.propTypes = {
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired
};
