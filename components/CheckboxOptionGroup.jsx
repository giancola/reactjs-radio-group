function CheckboxOptionGroup(props) {
	var name = props.name;

	return (
		<div>
			{props.options.map(function (option) {
				function onCheck() {
					props.onCheck(option.value);
				}

				if (option.value === 'other') {
					return (
						<CheckboxOtherOption
							key={option.value}
							name={name}
							checked={option.checked}
							onCheck={onCheck} />
					);
				} else {
					return (
						<CheckboxOption
							key={option.value}
							name={name}
							value={option.value}
							checked={option.checked}
							onCheck={onCheck}
							key={option.value}>
							{option.label}
						</CheckboxOption>
					);
				}
			})}
		</div>
	);
}

CheckboxOptionGroup.propTypes = {
	other: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired
};
