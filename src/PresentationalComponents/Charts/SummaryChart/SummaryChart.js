import React from 'react';
import PropTypes from 'prop-types';

const SummaryChart = (props) => {
    const className = props.className !== undefined ? ` ${props.className}` : '';
    return (
        <table className={ `pf-c-table pf-m-grid-md${className}` } role='grid' aria-label='Rule hits by severity' widget-type='InsightsSummaryChart'>
            <tbody>
                { props.children }
            </tbody>
        </table>
    );
};

SummaryChart.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string
};

export default SummaryChart;
