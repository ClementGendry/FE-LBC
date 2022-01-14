import PropTypes from 'prop-types';

interface ArrowInterface {
    height?: number,
    width?: number,
    color?: string,
}

const RightArrow: React.FC<ArrowInterface> = ({height, width, color}) => (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill={color} clipRule="evenodd">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
    </svg>
)

RightArrow.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string,
}

RightArrow.defaultProps = {
    height: 24,
    width: 24,
    color: '#000',
}

export default RightArrow;