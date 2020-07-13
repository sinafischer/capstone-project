import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

export default function AddActivityForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <StyledLabel for="name">
            {'Activity name'}
            <StyledInput
              name="name"
              ref={register({ required: true })}
              placeholder="Please, type your activity's name here"
            />
            {errors.name && 'An activity name is required'}
          </StyledLabel>
          <label for="details">
            {'Activity details'}

            <StyledTextarea
              name="details"
              ref={register}
              placeholder="Please, write a description of the activity or some useful information"
            />
          </label>
          <StyledAddButton> Add </StyledAddButton>
        </StyledForm>
      </form>
      <DivisionLine />
    </>
  )
}

const StyledForm = styled.div`
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
`

const DivisionLine = styled.div`
  background-color: var(--primary);
  max-width: 100%;
  height: 1px;
  margin: 50px 30px;
`
