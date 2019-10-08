import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory-menu.styles.scss'

const Directory= ({sections}) => {
        return (
            <div className='directory-menu'>
                {sections.map(({id,...otherProps}) =>(
                        <MenuItem key={id} {...otherProps} />))}
            </div>
        )
}

const mapStateToProps =createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);