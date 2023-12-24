import './ExpenseItem.css'

function ExpenseItem(){
    const ExpenseDate= new Date(2023, 11, 25);
    const ExpenseDesc = 'Automobile Pvt. Ltd.'
    const ExpensePrice = '2,81,60,305'
    return <div className='expense-item'>
            <div>{ExpenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{ExpenseDesc}</h2>
                <div className='expense-item__price'>{ExpensePrice}₹</div>
            </div>
    </div>
}

export default ExpenseItem;