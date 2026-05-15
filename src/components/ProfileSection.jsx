import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

function ProfileSection() {
  return (
    <main className="bg-white rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] px-6 py-8 flex flex-col gap-6">
      <div className="flex gap-5 items-start">
        <img src="" alt="" className="w-17.5 aspect-square rounded-full" />

        <ProfileHeader />
      </div>
      
      <ProfileInfo />
    </main>
  )
}

export default ProfileSection;