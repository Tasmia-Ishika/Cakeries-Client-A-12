import React from 'react';


const MyPortfolio = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-3xl m-4 font-serif'>Name : Tasmia Islam Ishika.</h1>
                    <h2 className='text-2xl m-4 font-serif'>Email: ishika.tasmia3787@gmail.com</h2>
                    <h2 className='text-3xl m-4 font-semibold'>Institute: International Islamic University Chittagong.</h2>
                    <p className='text-3xl m-4 font-semibold'>Subject: CSE (2nd semester)</p>
                    <p className='text-lg m-4 font-semibold'>As a developer the technologies I have been using so far are :</p>
                    <p className='text-xl font-semibold m-3 p-1'>1. HTML5.</p>
                    <p className='text-xl font-semibold m-3 p-1'>2. CSS3.</p>
                    <p className='text-xl font-semibold m-3 p-1'>3. Javascript.</p>
                    <p className='text-xl font-semibold m-3 p-1'>4. React App.</p>
                    <p className='text-xl font-semibold m-3 p-1'>5. React Router.</p>
                    <p className='text-xl font-semibold m-3 p-1'>6. React Icons/ FontAwesome Icons etc.</p>
                    <p className='text-xl font-semibold m-3 p-1'>7. Dom, Es6.</p>
                    <p className='text-xl font-semibold m-3 p-1'>8. React Hooks.</p>
                    <p className='text-xl font-semibold m-3 p-1'>9. Firebase.</p>
                    <p className='text-xl font-semibold m-3 p-1'>10. MongoDB.</p>
                    <p className='text-xl font-semibold m-3 p-1'>11. Heroku App.</p>
                    <p className='text-xl font-semibold m-3 p-1'>12. Netlify App.</p>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold p-5'>Here are some of my project's made using these technologies. Live Website links with their names are in below:</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Website Name</th>
                                <th>Live Website</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Pursify Bags</td>
                                <td>https://pursify-bags-by-ishika.netlify.app/</td>

                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Wild Earth</td>
                                <td>https://wild-earth-f3a62.web.app/</td>

                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Titan Automobiles</td>
                                <td>https://titan-automobiles.web.app/</td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;