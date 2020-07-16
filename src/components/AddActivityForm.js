import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddActivityForm({ setActivity }) {
  const [newActivity, setNewActivity] = useState({
    name: '',
    details: '',
  })

  return (
    <>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <StyledLabel>
            Activity name
            <StyledInput
              name="name"
              onChange={handleChange}
              value={newActivity.name}
              type="text"
              minLength="3"
              placeholder="Please, type your activity's name here"
              autoFocus
              required
            />
            {newActivity.name.length <= 3 && (
              <StyledError>Please use at least 3 characters</StyledError>
            )}
            {newActivity.name.length >= 70 && (
              <StyledError>Please use a maximum of 70 characters</StyledError>
            )}
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
            {newActivity.name.length >= 500 && (
              <StyledError>Please use a maximum of 500 characters</StyledError>
            )}
          </StyledLabel>
          <StyledAddButton type="submit"> Add </StyledAddButton>
        </form>
      </StyledForm>
    </>
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
  width: 280px;
  height: 40px;
  margin: 0 auto;
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
  width: 280px;
  height: 200px;
  margin: 0 auto;
  border-radius: 8px;
  border: solid 1px var(--primary);
  font-size: 1rem;
  color: var(--text-primary);
  font-family: inherit;

  :placeholder-shown {
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

const StyledError = styled.div`
  color: var(--tertiary);
  font-size: 0.8rem;
  font-weight: 300;
`
