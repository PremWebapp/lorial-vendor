
import React from 'react'
import UserHeaderCard from './helper/userHeaderCard'

function UserHeader() {
    return (
     <div className="border-bottom card-header">
          <div className="container">
            <div className='row align-items-start'>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' altTitle='firstImage' >
                    Top Offers
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' altTitle='xcsac' >
                    Grocery
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' altTitle='cscsa' >
                    Mobiles
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' altTitle='csaca' >
                    Fashion
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' altTitle='aww' >
                    Electronics
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' altTitle='cscss' >
                    Home
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' altTitle='firstreeImage' >
                    Appliances
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' altTitle='tt' >
                    Travel
                </UserHeaderCard>
            </div>
            <div className='col'>
                <UserHeaderCard alt='.' img='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' altTitle='firstItmage' >
                    Beauty and More
                </UserHeaderCard>
            </div>

        </div>
      </div>
     </div>
    )
}

export default UserHeader