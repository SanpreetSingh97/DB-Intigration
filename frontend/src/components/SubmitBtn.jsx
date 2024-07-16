import React from 'react'

const SubmitBtn = ({disabled}) => {
  return (
    <div>  <button
    type="submit"
    className="btn btn-outline-primary mt-3  fw-bold fs-5 rounded-pill px-4 "
    disabled={disabled}
    data-bs-toggle="modal" data-bs-target="#exampleModal"
  >
   Submit
  </button>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  ">
    <div class="modal-content bg-transparent rounded-5 shadow-lg">
      <div class="modal-header fw-bold bg1 rounded-top-5">
        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Contact Success</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body fs-3 text-dark fw-bold py-5 bg-light-subtle">
     <p>  Your Request  will reach to the Admin. <br/> They  will contact you soon</p>
      </div>
      <div class="modal-footer bg1 rounded-bottom-5">
     
        <button type="button" class="btn btn-outline-primary fs-4 fw-bold px-4 rounded-pill"data-bs-dismiss="modal" >OK</button>
      </div>
    </div>
  </div>
</div>
  
  
  </div>
  )
}

export default SubmitBtn