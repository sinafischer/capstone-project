import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

export default function AddActivityForm({ setActivity }) {
  const [newActivity, setNewActivity] = useState({
    name: '',
    details: '',
    id: uuid(),
  })

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          placeholder="Please use at least 3 characters"
          autoFocus
          required
          data-testid="activity-name"
        />
        <ErrorContainer>
          {newActivity.name.length <= 3 && (
            <StyledErrorMessage>
              Please use at least 3 characters
            </StyledErrorMessage>
          )}
          {newActivity.name.length >= 40 && (
            <StyledErrorMessage>
              Please use a maximum of 40 characters
            </StyledErrorMessage>
          )}
        </ErrorContainer>
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
          <StyledErrorMessage>
            Please use a maximum of 500 characters
          </StyledErrorMessage>
        )}
      </StyledLabel>
      <StyledAddButton
        type="submit"
        disabled={newActivity.name.length >= 3 ? false : true}
      >
        Add
      </StyledAddButton>
    </StyledForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setActivity(newActivity)
    console.log(newActivity)
    setNewActivity({
      name: '',
      details: '',
      id: uuid(),
    })
  }

  function handleChange(event) {
    setNewActivity({
      ...newActivity,
      [event.target.name]: event.target.value,
    })
  }
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 50px 0 0;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0 auto 40px;
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
  margin: 30px auto;

  :disabled {
    opacity: 40%;
  }
`

const StyledErrorMessage = styled.div`
  color: var(--text-primary);
  font-size: 0.8rem;
  font-weight: 300;
`
const ErrorContainer = styled.div`
  height: 20px;
`
