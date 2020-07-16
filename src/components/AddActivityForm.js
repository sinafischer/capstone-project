import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddActivityForm({ setActivity }) {
  const [newActivity, setNewActivity] = useState({
    name: '',
    details: '',
  })

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Activity name
          <StyledInput
            name="name"
            onChange={handleChange}
            value={newActivity.name}
            type="text"
            placeholder="Please, type your activity's name here"
          />
        </StyledLabel>
        <StyledLabel>
          Activity details
          <StyledTextarea
            name="details"
            onChange={handleChange}
            value={newActivity.details}
            type="text"
            placeholder="Please, write a description of the activity or some useful information"
          />
        </StyledLabel>
        <StyledAddButton type="submit"> Add </StyledAddButton>
      </form>
      <DivisionLine />
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setActivity(newActivity)
    setNewActivity({
      name: '',
      details: '',
    })
  }

  function handleChange(event) {
    setNewActivity({
      ...newActivity,
      [event.target.name]: event.target.value,
    })
  }
}

const StyledForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 50px;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 40px;
`

const StyledInput = styled.input`
  display: block;
  width: 277px;
  height: 40px;
  border-radius: 8px;
  border: solid 1px var(--primary);
  font-size: 1rem;
  color: var(--text-primary);

  :placeholder-shown {
    font-family: inherit;
    color: var(--text-secondary);
  }
`

const StyledTextarea = styled.textarea`
  display: block;
  width: 277px;
  height: 202px;
  border-radius: 8px;
  border: solid 1px var(--primary);
  margin-bottom: 40px;
  font-size: 1rem;
  color: var(--text-primary);

  :placeholder-shown {
    font-family: inherit;
    color: var(--text-secondary);
  }
`

const StyledAddButton = styled.button`
  display: block;
  width: 126px;
  height: 40px;
  border-radius: 20px;
  background: var(--primary);
  border: none;
  color: var(--senary);
  margin: 0 auto;
`

const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 30px;
`
