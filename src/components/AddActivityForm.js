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
        <StyledLabel htmlFor="name">
          Activity name
          <StyledInput
            name="name"
            id="name"
            onChange={handleChange}
            value={newActivity.name}
            type="text"
            minLength="3"
            maxLength="40"
            placeholder="Type your activity's name here"
            autoFocus
            required
            data-testid="activity-name"
          />
          {newActivity.name.length <= 3 && (
            <StyledError>
              Please add a name with at least 3 characters
            </StyledError>
          )}
          {newActivity.name.length >= 40 && (
            <StyledError>Please use a maximum of 40 characters</StyledError>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="details">
          Activity details
          <StyledTextarea
            name="details"
            id="details"
            onChange={handleChange}
            value={newActivity.details}
            type="text"
            maxLength="500"
            placeholder="Write a description of the activity or some useful information"
          />
          {newActivity.name.length >= 500 && (
            <StyledError>Please use a maximum of 500 characters</StyledError>
          )}
        </StyledLabel>
        <StyledAddButton
          type="submit"
          disabled={newActivity.name.length >= 3 ? false : true}
        >
          Add
        </StyledAddButton>
      </form>
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
  margin-bottom: 40px;
`

const StyledLabel = styled.label`
  display: block;
  margin: 50px auto;
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

  /* Placeholder color was displayed a lot darker in Chrome than in the other Browsers */
  ::-webkit-input-placeholder {
    color: #d7e1ea;
  }

  :placeholder-shown {
    font-family: inherit;
    color: var(--text-secondary);
  }
  :focus {
    outline: none;
  }
  :invalid {
    box-shadow: none;
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

  /* Placeholder color was displayed a lot darker in Chrome than in the other Browsers */
  ::-webkit-input-placeholder {
    color: #d7e1ea;
  }

  :placeholder-shown {
    color: var(--text-secondary);
  }
  :focus {
    outline: none;
  }
`

const StyledAddButton = styled.button`
  display: block;
  width: 126px;
  height: 40px;
  border-radius: 20px;
  background: var(--tertiary);
  border: none;
  color: var(--senary);
  margin: 0 auto;

  :disabled {
    opacity: 40%;
  }
`

const StyledError = styled.div`
  color: var(--text-primary);
  font-size: 0.8rem;
  font-weight: 300;
`
