import SelectedFields from "../../common/SelectedFields";
import { useEffect, useState } from "react";
import RHFSelect from "../../common/SelectedFields";
import SelectedFieldsV2 from "../../common/SelectedFieldsV2";
import TextFields from "../../common/TextFields";
import './FilterFields.scss';
import { experience, minimumBasePay, remote, roleSData, roles, techStack } from "../../MockData/MockData";
import DataCards from "../DataCards/DataCards";

export default function FilterFields(props) {
    const {selectedFilters,setSelectedFilters} = props;

const handleRoleChange = (event) => {
    setSelectedFilters({...selectedFilters, roles: event.target.value})
    console.log(event.target.value)
}

const handleTechStackChange = (event) => {
    setSelectedFilters({...selectedFilters, techStack: event.target.value});
};

const handleExperienceChange = (event) => {
    setSelectedFilters({...selectedFilters, experience: event.target.value});
};

const handleRemoteChange = (event) => {
    setSelectedFilters({...selectedFilters, remote: event.target.value});
};

const handleMiniBasChange = (event) => {
    setSelectedFilters({...selectedFilters, minBasPay: event.target.value});
}; 

const handleCompany = (event) => {
    setSelectedFilters({...selectedFilters, company: event.target.value});
};

const handleLocation = (event) => {
    setSelectedFilters({...selectedFilters, location: event.target.value});
};

useEffect(() => {
    console.log(selectedFilters,"filters");
}, [selectedFilters]);



    return (
        <div className="filterfields">
            <div className="filterfields-page">
                <SelectedFieldsV2
                    id='filterfields-page-roles'
                    name="Roles"
                    label="Roles"
                    placeholder='Roles'
                    options={"tenthMarks"}
                    data={roles.data}
                    onChange={handleRoleChange}
                    />
                <SelectedFieldsV2
                    id='filterfields-page-Tech-stack'
                    name="Tech Stack"
                    label="Tech Stack"
                    placeholder='Tech Stack'
                    options={"tenthMarks"}
                    data={techStack.data}
                    onChange={handleTechStackChange} />
                <SelectedFieldsV2
                    id='filterfields-page-Experience'
                    name="Experience"
                    label="Experience"
                    placeholder='Experience'
                    data={experience.data}
                    onChange={handleExperienceChange} />
                <SelectedFieldsV2
                    id='filterfields-page-Remote'
                    name="Remote"
                    label="Remote"
                    placeholder='Remote'
                    data={remote.data}
                    onChange={handleRemoteChange} />
                <SelectedFieldsV2
                    id='filterfields-page-minimum-base-pay'
                    name="Minimum Base Pay"
                    label="Min Base Pay"
                    placeholder='Minimum Base Pay'
                    data={minimumBasePay.data}
                    onChange={handleMiniBasChange} />
                <TextFields
                    id='filterfields-page-company-name'
                    name="Company Name"
                    label="Company Name"
                    placeholder='Search Company Name'
                    options={"tenthMarks"}
                    onChange={handleCompany} />
                <TextFields
                    id='filterfields-page-location'
                    name="Location"
                    label="Location"
                    placeholder='Search Location'
                    onChange={handleLocation} />
            </div>
        </div>
    )
}