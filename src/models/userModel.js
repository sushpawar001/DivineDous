const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provied a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provied a password"],
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpriy: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    profileData: {
        CreatedFor: String,
        Gender: String,
        FirstName: String,
        LastName: String,
        MaritalStatus: String,
        DateOfBirth: String,
        Height: String,
        Disability: String,
        HealthInformation: String,
        Diet: String,
        aboutYourself: String,
        ChurchName: String,
        ChurchAddress: String,
        IsBaptized: String,
        BaptismDate: String,
        FatherStatus: String,
        MotherStatus: String,
        FamilyType: String,
        FamilyTradition: String,
        AffluenceLevel: String,
        NoofSiblings: Number,
        Religion: String,
        motherTongue: String,
        EthnicOrigin: String,
        denominations: String,
        NativeCity: String,
        LivingCountry: String,
        LivingState: String,
        LivingCity: String,
        ResidencyStatus: String,
        Qualification: String,
        Degree: String,
        WorkingSector: String,
        WorkingAsRole: String,
        WorkingWith: String,
        Salary: String,
        MobileNumber: String,
        lookingforMaxAge: Number,
        lookingforMinAge: Number,
        lookingforMaxHeight: String,
        lookingforMinHeight: String,
        lookingforMaritalStatus: String,
        lookingforEthnicOrigin: String,
        lookingforReligion: String,
        lookingforDenomination: String,
        lookingforAnnualIncome: String,
        lookingforProfileCreatedby: String,
        lookingforDiet: String,
        lookingforCountryLiving: String,
        lookingforStateLiving: String,
        lookingforCity: String,
        lookingforQualification: String,
        lookingforDegree: String,
        lookingforWorkingSector: String,
        lookingforWorkingAsRole: String,
    },
});

const Users = mongoose.models.users || mongoose.model("users", UserSchema);
export default Users;
