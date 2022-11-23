<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
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
    
    Route::get('/admin', [BooksController::class, 'indexAdmin']);
    Route::get('/admin/tambah-buku', [BooksController::class, 'create']);

    // kategori Admin
    Route::get('/admin/kategori', [CategoriesController::class, 'index'])->name('admin.kategori');
    Route::post('/admin/kategori', [CategoriesController::class, 'store'])->name('admin.kategori.store');
    Route::get('/admin/tambah-kategori', [CategoriesController::class, 'create']);
    Route::get('/admin/kategori/{slug}/edit', [CategoriesController::class, 'edit'])->name('admin.kategori.edit');
    Route::delete('/admin/kategori/{kategori}', [CategoriesController::class, 'destroy'])->name('admin.kategori.destroy');
    // Route::resource('/admin/', PostController::class);
});


require __DIR__.'/auth.php';
