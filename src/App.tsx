import { useState } from 'react'
import './App.css'
function App() {
  // type FieldValues = {
  //   deliveryName: string,
  //   deliveryLastName: string,   // deliveryAddress: string, // deliveryPhone: string,    
  //   billingName : string, 
  //   billingLastName : string  // billingAddress : string,// billingPhone : string,   
  // }
  const [check, setCheck] = useState(false)
  const [state, setState] = useState({
    deliveryName: "",
    deliveryLastName: "" // deliveryAddress: "", // deliveryPhone: ""   
  });  
  // const [stateBill, setStateBill] = useState({
  //   billingName: "",
  //   billingLastName: ""
  // });
  // const onChange = (e: any) => {
  //   const { name, value } = e.target
  //   setState((abc) => ({
  //     ...abc,
  //     [name]: value
  //   }));
  // }
  ////////////////////////////////////
  const [stateBillData, setStateBillData] = useState({
    billingName: "",
    billingLastName: "a"  
  }); 
  // function isBillingSameAShippingTrue() {
  //   if(check===true){
  //     setStateBillData({
  //       billingName: state.deliveryName,
  //       billingLastName: state.deliveryLastName
  //     })
  //   }
  // }
  const checkBoxChange = (e:any) => { 
    setCheck(!check); 
    if(e.target.checked===true){
      setStateBillData({
        billingName: state.deliveryName,
        billingLastName: state.deliveryLastName
      })
    }else{
      setStateBillData({
        billingName: "",
        billingLastName: ""
      })
    }
  }
   
  return (
    <>
      <div>
        <form >
          <h1>     Delivery Address     </h1>
          <input type="text" name='deliveryName' placeholder='First Name' autoComplete='{false}' id='deliveryNameId' 
                onChange={(e) => setState({...state, deliveryName: e.target.value })} value={state.deliveryName}/>
                {/* // onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}/> */}
          <input type="text" name='deliveryLastName' placeholder='Last Name' autoComplete='{false}' 
                onChange={(e) => setState({...state, deliveryLastName: e.target.value })} value={state.deliveryLastName}/>

          {/* <input type="text" name='deliveryAddress' placeholder='Address' autoComplete='{false}' onChange={onChange} /> */}
          {/* <input type="text" name='deliveryPhone' placeholder='Phone' autoComplete='{false}' onChange={onChange} /> */}
          <h1>     Billing Address       </h1>

          <div className='check'>
            <label htmlFor='checkbox'>Same as Delivery address</label>
            <input type="checkbox" value='false' name='checkbox' checked={check} onChange={checkBoxChange} />
          </div>

          <input type="text" /*name='billingName' */ placeholder='First Name' autoComplete='{false}' disabled={check} 
              onChange={(e) => setStateBillData({...stateBillData, billingName: e.target.value })} value={stateBillData.billingName}/>
            {/* // value={check ? state.deliveryName : ""}   />   */}
          <input type="text" /*name='billingLastName'*/ placeholder='Last Name' autoComplete='{false}' disabled={check}
              onChange={(e) => setStateBillData({...stateBillData, billingLastName: e.target.value })} value={stateBillData.billingLastName}/>
            {/* // value={check ? state.deliveryLastName : ""} /> */}

          {/* <input type="text" name='billingAddress' placeholder='Address' autoComplete='{false}' */}
            {/* value={check ? state.deliveryAddress : ""} /> */}
          {/* <input type="text" name='billingPhone' placeholder='Phone' autoComplete='{false}' */}
            {/* value={check ? state.deliveryPhone : ""} /> */}

          <br /><br />
          <input type="button" className='btn' value="Submit" />

        </form>
      </div>

    </>
  )
}
export default App;




















// To implement a feature in React where the user can choose to make the billing address the same as the shipping address, 
//you'll need to create a form with checkboxes or a toggle switch to enable or disable this option. Here’s a step-by-step guide on how you can achieve this:
// Step 1: Set Up State Variables

// First, define state variables to store the addresses and whether the billing address should be the same as the shipping address.


// 



// ---------------------------
// Explanation:

//     State Variables:
//         shippingAddress: Stores the shipping address fields.
//         billingAddressSameAsShipping: Boolean state to determine if billing address should be the same as shipping address.
//         billingAddress: Stores the billing address fields.

//     Toggle Function:
//         toggleBillingSameAsShipping: Toggles the billingAddressSameAsShipping state and optionally copies the shipping address to the billing address when enabled.

//     Form Rendering:
//         Renders two forms: one for shipping address and one for billing address.
//         Uses conditional rendering ({!billingAddressSameAsShipping && (...)}) to show/hide the billing address form based on the checkbox state.

//     Input Handling:
//         handleShippingAddressChange and handleBillingAddressChange functions update the respective address state fields when user inputs data.

// Additional Considerations:

//     You may need additional fields (city, state, postalCode, etc.) in the address forms depending on your requirements.
//     Validation and error handling for address fields should be added as per your application's needs.
//     Styling and layout can be adjusted using CSS to improve the user interface.

// This setup allows users to easily toggle between using the same address for shipping and billing, 
//providing a seamless experience while entering their information. 
//Adjust the form structure and styling based on your specific design requirements and preferences.

