/* eslint-disable react/prop-types */
export const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div onClick={() => updateBoard(index)} className={className}>
      {children}
    </div>
  )
}