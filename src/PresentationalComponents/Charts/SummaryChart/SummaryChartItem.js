import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Battery } from '@red-hat-insights/insights-frontend-components';
import './SummaryChartItem.scss';

const SummaryChartItem = (props) => {
    const { numIssues, name, riskName } = props;
    return (
        <tr widget-type='InsightsSummaryChartItem' widget-id={ name }>
            { numIssues > 0 &&
                <>
                    <td className='pf-m-center pf-u-pl-sm pf-u-pr-sm'>
                        <Link to={ `/actions/${riskName}` }>
                            <Battery aria-label={ riskName } label={ riskName } severity={ name.toLowerCase() } labelHidden={ true } />
                        </Link>
                    </td>
                    <td className='pf-u-text-align-right pf-u-pl-sm'>
                        <Link to={ `/actions/${riskName}` }>
                            { numIssues }
                        </Link>
                    </td>
                    <td className='pf-u-text-align-left pf-u-pl-sm'>
                        <Link to={ `/actions/${riskName}` }>
                            { `${name} affecting ${props.affectedSystems} systems` }
                        </Link>
                    </td>
                </>
            }
            { numIssues === 0 &&
                <>
                    <td className='pf-u-pl-sm pf-u-pr-sm'>
                        <i className='fas fa-check-circle small-spacer green'></i>
                    </td>
                    <td className='pf-u-text-align-right pf-u-pl-sm'>0</td>
                    <td className='pf-u-text-align-left pf-u-pl-sm'>{ name } issues</td>
                </>
            }
        </tr>
    );
};

SummaryChartItem.propTypes = {
    affectedSystems: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    numIssues: PropTypes.number.isRequired,
    riskName: PropTypes.string.isRequired
};

export default SummaryChartItem;
