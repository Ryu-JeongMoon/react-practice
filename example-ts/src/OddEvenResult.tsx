const OddEvenResult = ({count}: any) => {
  return (
    <>{count % 2 === 0 ? "Even" : "Odd"}</>
  )
}

export default OddEvenResult