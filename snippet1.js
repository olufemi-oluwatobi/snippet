 handleValidation(property, value) {
    let errors = {};
    const numberRegex = new RegExp(/^[0-9]*$/gm);
    const checkContactNumber = numberRegex.test(value);

    if (property == "businessName" && value.length < 2) {
      errors.businessName = "too short";
    }
    if (property == "businessName" && value.length > 140) {
      errors.businessName = "too long";
    }
    if (property == "registrationNumber" && value.length < 3) {
      errors.registrationNumber = "too short";
    }

    if (property == "contactPhone" && !checkContactNumber) {
      errors.contactPhone = "invalid number";
    }
    if (property == "contactPhone" && value.length < 7) {
      errors.contactPhone = "invalid number";
    }
    if (property == "contactAddress" && value.length < 2) {
      errors.contactAddress = "too short";
    }
    if (property == "contactAddress" && value.length.length > 250) {
      errors.contactAddress = "too long";
    }
    this.setState({ errors: errors });
  }
     <Input
              value={
                fields.businessName
                  ? fields.businessName
                  : defaultFields.businessName
              }
              placeholder="business name"
              data-key="businessName"
              name="businessName"
              onChange={handleChange}
              onBlur={blurFunction}
              id="businessName"
            />
            
                  <span className="error__span">{errors.businessName}</span>
  handleBlur = event => {
    const {
      dataset: { key },
      value
    } = event.target;
    let [segment, property] = key.split("-");
    if (!property) {
      property = segment;
      segment = "data";
    }
    if (value.length > 0) this.handleValidation(property, value);
  };
