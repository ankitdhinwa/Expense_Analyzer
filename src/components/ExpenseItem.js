import './ExpenseItem.css'

function ExpenseItem(props){
    // const ExpenseDate= new Date(2023, 11, 25);
    // const ExpenseTitle = 'Automobile Pvt. Ltd.'
    // const ExpenseAmount = '2,81,60,305'
    return <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}₹</div>
            </div>
    </div>
}

export default ExpenseItem;