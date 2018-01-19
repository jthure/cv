import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as langActions from '../actions/langActions'
import Header from '../components/Header'

class ConnectedHeader extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Header
        onLangChange={this.props.setActiveLang}
        langValue={this.props.activeLang}
      />
    )
  }
}

const mapStateToProps = state => ({
  activeLang: state.lang.active,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...langActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader)
