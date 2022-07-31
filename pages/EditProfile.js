
export default function EditProfile() {

    return (
        <main>
            <form action="" method="post">
                <div className="name">
                    <label for="fullName" >Full Name</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="email">    
                    <label for="email" >Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="phone">   
                    <label for="phoneNo" >Phone No.</label>
                    <input type="tel" pattern="[0-9]{10}" id="phoneNo" name="phoneNo" required />
                </div>
                <div className="about">   
                    <label for="about" >About</label>
                    <textarea type="text" id="about" name="about" />
                </div>
                <div className="phone">   
                    <label for="caption" >Caption</label>
                    <textarea type="text" id="caption" name="caption" />
                </div>
                <div>
                    <input type="file"id="myFile" name="fileName" />
                </div>
                <div className="buttons">
                    <button>Cancel</button>
                    <button type="Submit">Save</button>
                </div>
            </form>
        </main>
    )
}