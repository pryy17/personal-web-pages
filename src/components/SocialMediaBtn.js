import React, { Component } from 'react'

export default class SocialMediaBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }

    render() {
        return (
            <div>
            <div class="c-share" >
                <input class="c-share__input" name="isGoing" type="checkbox" id="checkbox" />
            <label class="c-share__toggler" for="checkbox">
                <span class="c-share__icon"></span>
            </label>
                <ul class="c-share_options" data-title="kontak">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Google</li>
                    <li>Email</li>
                </ul>
            </div>
            </div>
        )
    }
}
