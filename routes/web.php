<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TagsController;

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


Route::get('/kontak', function () {
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

// User
Route::get('/', [BooksController::class, 'index'])->name('user.buku.terakhir');
Route::get('/katalog', [BooksController::class, 'katalog'])->name('user.katalog');

// Admin
Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');

    Route::get('admin', [BooksController::class, 'indexAdmin'])->name('admin.buku');
    Route::get('admin/tambah-buku', [BooksController::class, 'create'])->name('admin.buku.tambah');
    Route::post('admin/buku', [BooksController::class, 'store'])->name('admin.buku.store');
    Route::get('admin/buku/{slug}', [BooksController::class, 'show'])->name('admin.buku.show');


    // kategori Admin
    Route::get('admin/kategori', [CategoriesController::class, 'index'])->name('admin.kategori');
    Route::get('admin/tambah-kategori', [CategoriesController::class, 'create'])->name('admin.kategori.tambah');
    Route::post('admin/kategori', [CategoriesController::class, 'store'])->name('admin.kategori.store');
    Route::get('admin/kategori/{slug}/edit', [CategoriesController::class, 'edit'])->name('admin.kategori.edit');
    Route::put('admin/kategori/{slug}', [CategoriesController::class, 'update'])->name('admin.kategori.update');
    Route::delete('admin/kategori/{id}', [CategoriesController::class, 'destroy'])->name('admin.kategori.destroy');


    // tag Admin
    Route::get('admin/tag', [TagsController::class, 'index'])->name('admin.tag');
    Route::get('admin/tambah-tag', [TagsController::class, 'create'])->name('admin.tag.tambah');
    Route::post('admin/tag', [TagsController::class, 'store'])->name('admin.tag.store');
    Route::get('admin/tag/{slug}/edit', [TagsController::class, 'edit'])->name('admin.tag.edit');
    Route::put('admin/tag/{slug}', [TagsController::class, 'update'])->name('admin.tag.update');
    Route::delete('admin/kategori/{id}', [TagsController::class, 'destroy'])->name('admin.tag.destroy');


    // Route::resource('/admin/', PostController::class);
});


require __DIR__ . '/auth.php';
