import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../Redux/directory/directory.selectors';

import MenuItem from '../Menu_Item/MenuItem';

import { DirectoryMenuContainer } from './Directory.style';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
