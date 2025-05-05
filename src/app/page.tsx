'use client'
import { useRouter } from "next/navigation"

const Home = () => {
  const route = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dữ liệu đặt bàn:')
    alert('Đặt bàn thành công!')
    route.push('/table')
  }

  return (
    <section className="flex flex-col items-center max-w-full max-h-full justify-center gap-5 py-5 bg-btn-set-table">
      <div className="flex flex-col justify-center w-full items-center gap-2">
        <h1 className="text-[clamp(22px,2vw,30px)] font-bold text-footer">Chào mừng đến với OM NƯỚNG</h1>
        <p className="text-[clamp(16px,2vw,18px)] text-gray-600 font-light text-footer">Đặt bàn nhanh chóng - Ẩm thực phong phú</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl space-y-4"
      >
        <div>
          <label className="text-footer font-bold">Họ và tên</label>
          <input
            name="name"
            // value={form.name}
            // onChange={handleChange}
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-footer font-bold">Số ĐT</label>
            <input
              name="phone"
              placeholder="(Chọn số có Zalo)"
              // value={form.phone}
              // onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="text-footer font-bold">E-mail</label>
            <input
              name="email"
              placeholder="(Không bắt buộc)"
              // value={form.email}
              // onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-footer font-bold">Số người</label>
            <input
              name="people"
              // value={form.people}
              // onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="text-footer font-bold">Thời gian</label>
            <select
              name="time"
              // value={form.time}
              // onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
            >
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
            </select>
          </div>
          <div>
            <label className="text-footer font-bold">Ngày</label>
            <input
              type="date"
              name="date"
              // value={form.date}
              // onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="text-footer font-bold">Chi nhánh</label>
          <select
            name="branch"
            // value={form.branch}
            // onChange={handleChange}
            className="mt-1 w-full border rounded-md px-3 py-2"
          >
            <option value="">Chọn chi nhánh OM Nướng</option>
            <option value="om-quan1">OM Quận 1</option>
            <option value="om-quan7">OM Quận 7</option>
          </select>
        </div>

        <div>
          <label className="text-footer font-bold">Loại tiệc</label>
          <select
            name="partyType"
            // value={form.partyType}
            // onChange={handleChange}
            className="mt-1 w-full border rounded-md px-3 py-2"
          >
            <option value="">Chọn loại tiệc</option>
            <option value="sinh-nhat">Sinh nhật</option>
            <option value="ky-niem">Kỷ niệm</option>
          </select>
        </div>

        <div>
          <label className="text-footer font-bold">Ghi chú</label>
          <textarea
            name="note"
            // value={form.note}
            // onChange={handleChange}
            placeholder='VD: Hoa, Nến và Bảng tên. Ghi "Không" nếu không có.'
            className="mt-1 w-full border rounded-md px-3 py-2"
            rows={3}
          />
        </div>

        <button

          // onClick={() => {
          // }}
          className="bg-btn-unfocus bg-btn-hover bg-btn-focus bg-btn-active mt-4 py-2 px-4 w-full transition duration-300 rounded-lg">
          <span className="text-sm text-btn font-bold">ĐẶT BÀN NGAY</span>
        </button>
      </form>
    </section>
  )

}

export default Home