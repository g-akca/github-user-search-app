function ProfileHeader({ data }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-[26px] leading-[120%] font-bold text-neutral-700">{data.name}</h2>
        <p className="text-[16px] leading-base text-blue-500">@{data.login}</p>
      </div>

      <p>
        Joined {new Date(data.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })}
      </p>
    </div>
  )
}

export default ProfileHeader;