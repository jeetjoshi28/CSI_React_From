import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordShown: '',
      phoneNo: '',
      country: '',
      city: '',
      panNo: '',
      aadharNo: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = this.findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      this.setState({ errors: newErrors });
    } else {
      // submit the form data
      this.setState({ submitted: true });
    }
  };

  findFormErrors = () => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNo,
      country,
      city,
      panNo,
      aadharNo,
      submitted
    } = this.state;
    const newErrors = {};
    if (!firstName || firstName === '') newErrors.firstName = 'First name cannot be blank!';

    if (!lastName || lastName === '') newErrors.lastName = 'Last name cannot be blank!';

    if (!username || username === '') newErrors.username = 'Username cannot be blank!';

    if (!email || email === '') newErrors.email = 'Email cannot be blank!';

    if (!password || password === '') newErrors.password = 'Password cannot be blank!';

    if (!phoneNo || phoneNo === '') newErrors.phoneNo = 'Phone number cannot be blank!';

    if (!country || country === '') newErrors.country = 'Country cannot be blank!';

    if (!city || city === '') newErrors.city = 'City cannot be blank!';

    if (!panNo || panNo === '') newErrors.panNo = 'PAN number cannot be blank!';

    if (!aadharNo || aadharNo === '') newErrors.aadharNo = 'Aadhar number cannot be blank!';

    return newErrors;
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordShown: !prevState.passwordShown,
    }));
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordShown,
      phoneNo,
      country,
      city,
      panNo,
      aadharNo,
      errors,
      submitted
    } = this.state;

    if (submitted) {
        return (
          <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', 
           border: '2px solid #ccc', borderRadius: '10px', 
           boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', 
           background: '#007BFF', color: '#fff' }}>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering. We have received your details.</p>
          </div>
        );
      }

    return (
      <form onSubmit={this.handleSubmit} style={{ maxWidth: '500px', margin: 
       '40px auto', padding: '30px', border: '2px solid #ccc', borderRadius: 
        '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color:'white' ,marginBottom: '20px' 
        }}>Registration Form</h2> 

        <label style={{ display: 'block', margin: '10px 0', color:'white' }}>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange= 
          {this.handleChange} style={{ padding: '10px',  width: '100%', 
          border:'1px solid #ccc', borderRadius: '5px'}} />
          {errors.firstName && <p style={{ color: 'red', fontSize: '12px' }}> 
          {errors.firstName}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0', color:'white'}}>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange= 
            {this.handleChange} style={{ padding: '10px', width: '100%', 
            border: '1px solid #ccc', borderRadius: '5px' }} />
            {errors.lastName && <p style={{ color: 'red', fontSize: '12px' }}> 
            {errors.lastName}</p>}
        </label>
        <br />

        <label style={{ display: 'block', color:'white' , margin: '10px 0' }}>
         Username:
          <input type="text" name="username" value={username} 
          onChange={this.handleChange} style={{ padding: '10px', width: '100%', 
          border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.username && <p style={{ color: 'red', fontSize: '12px' }}> 
         {errors.username}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0', color:'white'}}>
          Email:
          <input type="email" name="email" value={email} 
          onChange={this.handleChange} style={{ padding: '10px', width: '100%', 
          border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.email && <p style={{ color: 'red', fontSize: '12px' }}> 
          {errors.email}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0', color: 'white' }}>
            Password:
            <input type={passwordShown ? 'text' : 'password'} 
            name="password" value={password} onChange={this.handleChange} 
            style={{ padding: '10px', width: '100%', border: '1px solid #ccc',  
            borderRadius: '5px' }} />
            <button type="button" onClick={this.togglePasswordVisibility} 
            style={{ marginLeft: '10px', background: 'none', border: 'none',   
            cursor: 'pointer' }}>
            {passwordShown ? <i className="fas fa-eye-slash"></i> : <i 
            className="fas fa-eye"></i>}
           </button>
        {errors.password && <p style={{ color: 'red', fontSize: '12px' }}> 
        {errors.password}</p>}
    </label>
    

    <label style={{ display: 'block', margin: '10px 0', color: 'white' }}>
        Phone Number:
        <div style={{ position: 'relative', width: '100%' }}>
        <input type="text" name="phoneNo" value={phoneNo} 
        onChange={this.handleChange} 
        style={{ padding: '10px',width: '75%', border: '1px solid #ccc', 
        borderRadius: '5px', position: 'absolute', top: 0, right: 0 }} />
        <select name="countryCode" style={{ padding: '10px', width: '20%', 
        border: '1px solid #ccc', borderRadius: '5px', position: 'absolute', 
        top: 0 , left: 0 }}>
            <option value="+1">+1 (United States)</option>
            <option value="+44">+44 (United Kingdom)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+33">+33 (France)</option>
            <option value="+91">+91 (India)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+86">+86 (China)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+7">+7 (Russia)</option>
            <option value="+34">+34 (Spain)</option>
            <option value="+1-242">+1-242 (Bahamas)</option>
            <option value="+1-246">+1-246 (Barbados)</option>
            <option value="+1-264">+1-264 (Anguilla)</option>
            <option value="+1-268">+1-268 (Antigua and Barbuda)</option>
            <option value="+1-284">+1-284 (British Virgin Islands)</option>
            <option value="+1-340">+1-340 (U.S. Virgin Islands)</option>
            <option value="+1-441">+1-441 (Bermuda)</option>
            <option value="+1-473">+1-473 (Grenada)</option>
            <option value="+1-649">+1-649 (Turks and Caicos Islands)</option>
            <option value="+1-664">+1-664 (Montserrat)</option>
            <option value="+1-670">+1-670 (Northern Mariana Islands)</option>
            <option value="+1-671">+1-671 (Guam)</option>
            <option value="+1-684">+1-684 (American Samoa)</option>
            <option value="+1-758">+1-758 (Saint Lucia)</option>
            <option value="+1-767">+1-767 (Dominica)</option>
            <option value="+1-784">+1-784 (Saint Vincent and the Grenadines) 
            </option>
            <option value="+1-787">+1-787 (Puerto Rico)</option>
            <option value="+1-939">+1-939 (Puerto Rico)</option>
            <option value="+1-868">+1-868 (Trinidad and Tobago)</option>
            <option value="+1-869">+1-869 (Saint Kitts and Nevis)</option>
            <option value="+1-876">+1-876 (Jamaica)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+27">+27 (South Africa)</option>
            <option value="+30">+30 (Greece)</option>
            <option value="+31">+31 (Netherlands)</option>
            <option value="+32">+32 (Belgium)</option>
            <option value="+36">+36 (Hungary)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+40">+40 (Romania)</option>
            <option value="+41">+41 (Switzerland)</option>
            <option value="+43">+43 (Austria)</option>
            <option value="+45">+45 (Denmark)</option>
            <option value="+46">+46 (Sweden)</option>
            <option value="+47">+47 (Norway)</option>
            <option value="+48">+48 (Poland)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+51">+51 (Peru)</option>
            <option value="+52">+52 (Mexico)</option>
            <option value="+53">+53 (Cuba)</option>
            <option value="+54">+54 (Argentina)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+56">+56 (Chile)</option>
            <option value="+57">+57 (Colombia)</option>
            <option value="+58">+58 (Venezuela)</option>
            <option value="+60">+60 (Malaysia)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+62">+62 (Indonesia)</option>
            <option value="+63">+63 (Philippines)</option>
            <option value="+64">+64 (New Zealand)</option>
            <option value="+65">+65 (Singapore)</option>
            <option value="+66">+66 (Thailand)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+82">+82 (South Korea)</option>
            <option value="+84">+84 (Vietnam)</option>
            <option value="+86">+86 (China)</option>
            <option value="+90">+90 (Turkey)</option>
            <option value="+91">+91 (India)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+93">+93 (Afghanistan)</option>
            <option value="+94">+94 (Sri Lanka)</option>
            <option value="+95">+95 (Myanmar)</option>
            <option value="+98">+98 (Iran)</option>
            <option value="+212">+212 (Morocco)</option>
            <option value="+213">+213 (Algeria)</option>
            <option value="+216">+216 (Tunisia)</option>
            <option value="+218">+218 (Libya)</option>
            <option value="+220">+220 (Gambia)</option>
            <option value="+221">+221 (Senegal)</option>
            <option value="+222">+222 (Mauritania)</option>
            <option value="+223">+223 (Mali)</option>
            <option value="+224">+224 (Guinea)</option>
            <option value="+225">+225 (Ivory Coast)</option>
            <option value="+226">+226 (Burkina Faso)</option>
            <option value="+227">+227 (Niger)</option>
            <option value="+228">+228 (Togo)</option>
            <option value="+229">+229 (Benin)</option>
            <option value="+230">+230 (Mauritius)</option>
            <option value="+231">+231 (Liberia)</option>
            <option value="+232">+232 (Sierra Leone)</option>
            <option value="+233">+233 (Ghana)</option>
            <option value="+234">+234 (Nigeria)</option>
            <option value="+235">+235 (Chad)</option>
            <option value="+236">+236 (Central African Republic)</option>
            <option value="+237">+237 (Cameroon)</option>
            <option value="+238">+238 (Cape Verde)</option>
            <option value="+239">+239 (Sao Tome and Principe)</option>
            <option value="+240">+240 (Equatorial Guinea)</option>
            <option value="+241">+241 (Gabon)</option>
            <option value="+242">+242 (Republic of the Congo)</option>
            <option value="+243">+243 (Democratic Republic of the Congo)         
            </option>
            <option value="+244">+244 (Angola)</option>
            <option value="+245">+245 (Guinea-Bissau)</option>
            <option value="+246">+246 (British Indian Ocean Territory)</option>
            <option value="+248">+248 (Seychelles)</option>
            <option value="+249">+249 (Sudan)</option>
            <option value="+250">+250 (Rwanda)</option>
            <option value="+251">+251 (Ethiopia)</option>
            <option value="+252">+252 (Somalia)</option>
            <option value="+253">+253 (Djibouti)</option>
            <option value="+254">+254 (Kenya)</option>
            <option value="+255">+255 (Tanzania)</option>
            <option value="+256">+256 (Uganda)</option>
            <option value="+257">+257 (Burundi)</option>
            <option value="+258">+258 (Mozambique)</option>
            <option value="+260">+260 (Zambia)</option>
            <option value="+261">+261 (Madagascar)</option>
            <option value="+262">+262 (Réunion)</option>
            <option value="+263">+263 (Zimbabwe)</option>
            <option value="+264">+264 (Namibia)</option>
            <option value="+265">+265 (Malawi)</option>
            <option value="+266">+266 (Lesotho)</option>
            <option value="+267">+267 (Botswana)</option>
            <option value="+268">+268 (Eswatini)</option>
            <option value="+269">+269 (Comoros)</option>
            <option value="+290">+290 (Saint Helena)</option>
            <option value="+291">+291 (Eritrea)</option>
            <option value="+297">+297 (Aruba)</option>
            <option value="+298">+298 (Faroe Islands)</option>
            <option value="+299">+299 (Greenland)</option>

        </select>
        </div>
        {errors.phoneNo && <p style={{ color: 'red', fontSize: '12px' }}>       
        {errors.phoneNo}</p>}
    </label>
    <br />
        <br/>
        <label style={{ display: 'block', margin: '10px 0', color: 'white' }}>
            Country:
            <select name="country" value={country} onChange={this.handleChange} 
            style={{ padding: '10px', width: '104%', border: '1px solid #ccc', 
            borderRadius: '5px' }}>
                <option value="">Select a country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="UK">United Kingdom</option>
            </select>
            {errors.country && <p style={{ color: 'red', fontSize: '12px' }}> 
            {errors.country}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0', color: 'white' }}>
         City:
            <select name="city" value={city} onChange={this.handleChange} 
            style= {{ padding: '10px', width: '104%', border: '1px solid #ccc', 
            borderRadius: '5px' }}>
                <option value="">Select a city</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Toronto">Toronto</option>
                <option value="Montreal">Montreal</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
            </select>
            {errors.city && 
            <p style={{ color: 'red', fontSize: '12px' }}>         
            {errors.city}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0' , color:'white' }}>
          PAN Number:
          <input type="text" name="panNo" value={panNo} onChange= 
           {this.handleChange} style={{ padding: '10px', width: '100%', 
           border: '1px solid #ccc', borderRadius: '5px' }} />
          {errors.panNo && <p style={{ color: 'red', fontSize: '12px' }}> 
           {errors.panNo}</p>}
        </label>
        <br />

        <label style={{ display: 'block', margin: '10px 0' , color:'white'}}>
          Aadhar Number:
          <input type="text" name="aadharNo" value={aadharNo} onChange= 
           {this.handleChange} style={{ padding: '10px', width: '100%', 
           border: '1px solid #ccc', borderRadius: '5px' }} />
           {errors.aadharNo && <p style={{ color: 'red', fontSize: '12px' }}> 
           {errors.aadharNo}</p>}
        </label>
        <br />

        <button type="submit" style={{ padding: '10px 20px', 
            backgroundColor: '#007BFF', color: '#fff', border: 'none', 
            borderRadius: '5px', cursor: 'pointer' }}>
            Register
        </button>

      </form>
    );
  }
}

export default RegistrationForm;