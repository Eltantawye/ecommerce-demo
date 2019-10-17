import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import {DirectoryMenuContainer } from './directory-menu.styles'
const Directory= ({sections}) => {
        return (
            <DirectoryMenuContainer>
                {sections.map(({id,...otherProps}) =>(
                        <MenuItem key={id} {...otherProps} />))}
            </DirectoryMenuContainer>
        )
}

const mapStateToProps =createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);