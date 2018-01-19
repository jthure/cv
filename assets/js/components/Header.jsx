import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const Header = props => (
  <div className="header">
    <div className="header-background" />
    <div className="selectlang">
      <DropDownMenu
        floatingLabelText="Language"
        value={props.langValue}
        onChange={(_e, _i, value) => props.onLangChange(value)}
        style={{ color: 'white' }}
        floatingLabelStyle={{ color: 'white' }}
        underlineStyle={{ color: 'white' }}
      >
        <MenuItem value="en" primaryText="English" />
        <MenuItem value="sv" primaryText="Svenska" />
      </DropDownMenu>
    </div>
  </div>
)

export default Header
