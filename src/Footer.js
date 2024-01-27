import React from 'react'

function Footer() {
    return (
        <div className='my-3'>
            <div class="card">
                <div className="container mb-4 my-4">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>“The only way to learn a new programming language is by writing programs in it.”</p>
                        <footer class="blockquote-footer">Dennis Ritchie.<cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
            </div>
            <div class="alert alert-light bg-dark text-center" role="alert">
                &copy; Copyrights all reserved-2021
            </div>
        </div>
    )
}

export default Footer
