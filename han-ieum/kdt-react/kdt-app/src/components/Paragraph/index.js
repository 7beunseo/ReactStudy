import PropTypes from 'prop-types'

function Paragraph( {children, size = 16, color = "black"} ) {
    return (
        <p style={{fontSize: size, color}}> {children}</p>
    )
}

Paragraph.prototype = {
    children: PropTypes.node.isRequired, // 반드시
    size: PropTypes.number,
    color: PropTypes.string,
}
export default Paragraph;