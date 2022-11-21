<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BooksController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('User/index', [
//         'title' => 'Home',
//         'welcome' => 'Selamat Datang',
//         'judul' => 'Pembubaran Organisasi Kemasyarakatan Dari Belakang',
//         'slug' => 'pembubaran-organisasi-kemasyarakatan',
//         'harga' => 'Rp. ' . 115000,
//         'deskripsi' => 'Pembubaran Ormas menimbulkan polemik di masyarakat, Salah satu yang menjadi permasalahan adalah peniadaan proses peradilan dalam rangkaian proses pembubaran organisasi kemasyarakatan. Padahal penyelenggaraan peradilan guna menegakkan hukum dan keadilan merupakan salah satu kunci atau pilar dalam negara hukum dan penegakan hak asasi manusia, mengingat organisasi masyarakat merupakan salah satu manifestasi hak konstitusional warga negara dalam bidang kebebasan berkumpul dan berserikat. Buku ini bertujuan untuk Ilmu Pengetahuan tentang pembubaran organisasi kemasyarakatan dalam sistem hukum di Indonesia yang menjamin kebebasan berserikat, berkumpul dan mengeluarkan pendapat sesuai dengan Undang-Undang Dasar Negara Republik Indonesia 1945. Dari Belakang'
//     ]);
// });

Route::get('/', [BooksController::class, 'index']);
Route::get('/katalog', [BooksController::class, 'katalog']);

Route::get('/kontak', function ()
{
    return Inertia::render('User/Kontak', [
        'title' => 'Kontak'
    ]);
});

Route::get('/acakanlay', function () {
    return Inertia::render('Admin/Index');
});

Route::get('/acakan', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    Route::get('/admin', function () {
        return Inertia::render('Admin/Index', [
            'auth' => auth()->user()
        ]);
    })->name('admin');
});


require __DIR__.'/auth.php';
