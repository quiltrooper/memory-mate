from typing import Literal
from pydantic import BaseModel, ConfigDict, Field, field_validator

class StrictModel(BaseModel):
    model_config = ConfigDict(extra='forbid', str_strip_whitespace=True)

class Preferences(StrictModel):
    language: Literal['en','hi','as'] = 'en'
    largeText: bool = False
    responseGoalMs: int = Field(default=4000, ge=1000, le=30000)
    weeklyGoalDays: int = Field(default=4, ge=1, le=7)

class ProfileInput(StrictModel):
    name: str = Field(min_length=1, max_length=120)
    age: int = Field(ge=1, le=120)
    gender: str = Field(default='Not specified', max_length=40)
    location: str = Field(default='', max_length=200)
    primaryCaregiver: str = Field(default='', max_length=120)
    notes: str = Field(default='', max_length=2000)
    diagnosis: str = Field(default='Not assessed', max_length=200)
    ashaWorker: str = Field(default='', max_length=120)
    hospital: str = Field(default='', max_length=200)
    preferences: Preferences = Field(default_factory=Preferences)

class ProfileUpdate(ProfileInput):
    version: int = Field(ge=1)

class ReminderInput(StrictModel):
    title: str = Field(min_length=1, max_length=200)
    time: str = Field(min_length=1, max_length=30)
    category: Literal['medication','meal','appointment','routine'] = 'routine'
    completed: bool = False
    notes: str = Field(default='', max_length=1000)
    assignedBy: str = Field(default='', max_length=120)

class MemoryInput(StrictModel):
    title: str = Field(min_length=1, max_length=200)
    caption: str = Field(min_length=1, max_length=2000)
    dateOrEra: str = Field(default='', max_length=120)
    location: str = Field(default='', max_length=200)
    imageUrl: str = Field(default='', max_length=2000)
    version: int = Field(ge=1)

    @field_validator('imageUrl')
    @classmethod
    def safe_image_url(cls, value):
        if value and not value.startswith('https://'):
            raise ValueError('Use an HTTPS image URL or leave it blank')
        return value
